/*eslint-disable */
const path = require('path');
const fs = require('fs');
const yaml = require('write-yaml');
/*
  helpers
*/
function createJSONForDesktopViews(fileArray, data) {
  for (const [index, value] of fileArray.entries()) {
    data.jobs[`test${index + 1}`] = {
      working_directory: '~/tmp',
      docker: [
        {
          image: 'cypress/base:10',
          environment: {
            TERM: 'xterm',
          },
        },
      ],
      steps: [
        {
          attach_workspace: {
            at: '~/',
          },
        },
        {
          run: 'ls -la cypress',
        },
        {
          run: 'ls -la cypress/integration/Desktop_views/',
        },
        {
          run: {
            name: `Running cypress tests ${index + 1}`,
            command: `$(npm bin)/cypress run --spec cypress/integration/Desktop_views/${value}`,
          },
        },
        {
          store_artifacts: {
            path: 'cypress/videos',
          },
        },
        {
          store_artifacts: {
            path: 'cypress/screenshots',
          },
        },
      ],
    };
    data.workflows.build_and_test.jobs.push({
      [`test${index + 1}`]: {
        requires: [
          'build',
        ],
      },
    });
  }
  return data;
}
function writeFileForDesktopViews(data) {
  yaml(path.join(__dirname, '..', '.circleci', 'config.yml'), data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success!');
    }
  });
}
function createJSONForMobileViews(fileArray, data) {
    for (const [index, value] of fileArray.entries()) {
      data.jobs[`test${index + 1}`] = {
        working_directory: '~/tmp',
        docker: [
          {
            image: 'cypress/base:10',
            environment: {
              TERM: 'xterm',
            },
          },
        ],
        steps: [
          {
            attach_workspace: {
              at: '~/',
            },
          },
          {
            run: 'ls -la cypress',
          },
          {
            run: 'ls -la cypress/integration/Mobile_views/',
          },
          {
            run: {
              name: `Running cypress tests ${index + 1}`,
              command: `$(npm bin)/cypress run --spec cypress/integration/Mobile_views/${value}`,
            },
          },
          {
            store_artifacts: {
              path: 'cypress/videos',
            },
          },
          {
            store_artifacts: {
              path: 'cypress/screenshots',
            },
          },
        ],
      };
      data.workflows.build_and_test.jobs.push({
        [`test${index + 1}`]: {
          requires: [
            'build',
          ],
        },
      });
    }
    return data;
  }
  function writeFileForMobileViews(data) {
    yaml(path.join(__dirname, '..', '.circleci', 'config.yml'), data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Success!');
      }
    });
  }
/*
  main
*/
// get spec files as an array
const desktop_files = fs.readdirSync(path.join(__dirname, '..', 'cypress', 'integration','Desktop_views')).filter(fn => fn.endsWith('.spec.js'));
const mobile_files = fs.readdirSync(path.join(__dirname, '..', 'cypress', 'integration','Mobile_views')).filter(fn => fn.endsWith('.spec.js'));
// read circle.json
const circleConfigJSON = require(path.join(__dirname, 'circle.json'));
// add cypress specs to object as test jobs
const desktopview_data = createJSONForDesktopViews(desktop_files, circleConfigJSON);
const mobileview_data = createJSONForMobileViews(mobile_files, circleConfigJSON); 
// write file to disc
writeFileForDesktopViews(desktopview_data);
writeFileForMobileViews(mobileview_data);