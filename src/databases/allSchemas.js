import Realm from 'realm';

export const SELECT_SCHEMA = 'proxy';

export const SelectSchema = {
  name: SELECT_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    photographer: 'string',
    src: 'string',
  },
};

const databaseOptions = {
  path: 'selectList.realm',
  schema: [SelectSchema],
  schemaVersion: 0,
};

export const insertSelected = (newSelected) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(SELECT_SCHEMA, newSelected);
          resolve(newSelected);
        });
      })
      .catch((error) => reject(error));
  });

export const deleteSelect = (id) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) => {
      realm
        .write(() => {
          let deleteSelect = realm.objectForPrimaryKey(SELECT_SCHEMA, id);
          realm.delete(deleteSelect);
          resolve();
        })
        .catch((error) => reject(error));
    });
  });

export const allSelected = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allSelect = realm.objects(SELECT_SCHEMA);
        resolve(allSelect);
      })
      .catch((error) => reject(error));
  });

export default new Realm(databaseOptions);
