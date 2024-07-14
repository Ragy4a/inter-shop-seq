const { exec } = require('child_process');

const seeders = [
  '20240714203009-item-category.js',
  '20240714203017-item-type.js',
  '20240714202912-brand.js',
  '20240714203030-model.js',
  '20240714203024-store.js',
  '20240714203002-item.js',
  '20240714202931-customer.js',
  '20240714202939-order.js',
  '20240714203036-item-order.js'
];

const executeSeeders = async (seeders) => {
    for (const seeder of seeders) {
      await new Promise((resolve, reject) => {
        exec(`npx sequelize-cli db:seed --seed ${seeder}`, (err, stdout, stderr) => {
          if (err) {
            console.error(`Error executing seeder ${seeder}:`, err);
            reject(err);
            return;
          }
          console.log(`Seeder ${seeder} executed successfully:\n`, stdout);
          if (stderr) {
            console.error(`Errors:\n`, stderr);
          }
          resolve();
        });
      });
    }
  };
  
  executeSeeders(seeders)
    .then(() => console.log('All seeders executed successfully'))
    .catch(err => console.error('Error executing seeders:', err));

/** 
 * Данный код был написан с помощью исскуственного интелекта
 * Цель этого кода это выполние сидов в правильном порядке
 * Команда для запуска - npm run seedall
 * */ 