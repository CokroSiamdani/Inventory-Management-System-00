module.exports = {
  /* general options */

  resolver: {
    /* resolver options */
    sourceExts: ["js", "json", "ts", "tsx", "cjs"],
  },
  transformer: {
    /* transformer options */
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
  serializer: {
    /* serializer options */
  },
  server: {
    /* server options */
  },
  watcher: {
    /* watcher options */
    watchman: {
      /* Watchman-specific options */
    },
  },
};
