// @ts-check

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
const config = {
    compilationOptions: {
        preferredConfigPath: './tsconfig.json',
    },
    entries: [
        {
            filePath: './types.ts',
            outFile: './dist/type-bundle.d.ts',
            noCheck: false,
            output: {
                inlineDeclareGlobals: true,
                sortNodes: true,
                noBanner: true,
                inlineDeclareExternals: true
            }
        }
    ]
};

module.exports = config;
