const path = require('path');
const fs = require('fs');

exports.newFolder = (folderPath, params) => {
  const folderName = path.basename(folderPath);
  if (folderName !== '_example') return;
  // 读取app.json
  const appJsonPath = path.join(__dirname.replace('.templates', 'example'), 'app.json');
  const appJson = require(appJsonPath);
  const pages = appJson.pages;
  const parentName = path.basename(folderPath.replace(/(.*)_example/, '$1'));
  const examplePagePath = `pages/${parentName}/${params.file_name}`;
  if (!pages.includes(examplePagePath)) {
    pages.push(examplePagePath);
    fs.writeFile(appJsonPath, JSON.stringify(appJson, undefined, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('app.json file updated successfully.');
    });
  }
  // 配置demo页面
  const groupName = params.group_name;
  const examplePageConfig = {
    name: params.component_name,
    label: params.component_label,
    path: `/${examplePagePath}`,
  };
  const exampleDataJsonPath = path.resolve(
    __dirname.replace('.templates', `example/pages/home/data/${groupName}.data.json`),
  );
  const exampleDataJson = require(exampleDataJsonPath);
  const examplePageList = exampleDataJson.children;
  if (!examplePageList.map((item) => item.name).includes(examplePageConfig.name)) {
    examplePageList.push(examplePageConfig);
    exampleDataJson.children = examplePageList;
    fs.writeFile(exampleDataJsonPath, JSON.stringify(exampleDataJson, undefined, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${groupName}.data.json.json file updated successfully.`);
    });
  }
};
