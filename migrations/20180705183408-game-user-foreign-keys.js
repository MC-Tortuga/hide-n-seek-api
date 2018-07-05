'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.addForeignKey('game_users_maps', 'users', 'userId',
    {
      'id': 'userId_fk'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);

  db.addForeignKey('game_user_map', 'game_table', 'gameId',
    {
      'id': 'gameId_fk'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
};

exports.down = function (db, callback) {
  db.removeForeignKey('game_users_maps', 'userId', callback);
  db.removeForeignKey('game_user_maps', 'games', 'gameId', callback);
};

exports._meta = {
  "version": 1
};
