const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const puppeteer = require('puppeteer');

const sectionsPath = path.join(__dirname, 'src/sections');
const sections = fs
  .readdirSync(sectionsPath, { withFileTypes: true })
  .filter(item => item.isDirectory());

for (const section of sections) {
  const sectionPath = path.join(sectionsPath, section.name, 'exercises');
  const exercises = fs
    .readdirSync(sectionPath, { withFileTypes: true })
    .filter(item => item.isDirectory());
  for (const exercise of exercises) {
    const srcPath = path.join(sectionPath, exercise.name, 'src');
    fse.copySync(
      srcPath,
      path.join(
        __dirname,
        'build/exercises',
        `${section.name}-${exercise.name}`
      )
    );
  }
}

fse.copyFileSync(
  path.join(__dirname, 'server.js'),
  path.join(__dirname, 'build/server.js')
);

async function exportPDF() {
  const b = await puppeteer.launch();
  const p = await b.newPage();
  await p.goto(path.join(__dirname, 'build/index.html'), {
    waitUntil: 'networkidle2'
  });
  await p.click('[data-test-id="slides-link"]');
  await p.evaluate(() => {
    window.location.href = window.location.href + '?export';
  });
  await p.emulateMedia('screen');
  await new Promise(r => setTimeout(r, 2000));
  await p.pdf({
    path: path.join(__dirname, 'build/slides.pdf'),
    printBackground: true,
    landscape: true,
    width: '800px'
  });
  b.close();
}

exportPDF();
