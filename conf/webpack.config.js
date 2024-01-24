import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(resolve(__filename, '..'));

/** @type {import('webpack').Configuration} */
export default {
    mode: 'production',
    entry: {
        index: resolve(__dirname, 'src', 'index.ts')
    },
    optimization: {},
    plugins: [

    ],
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'src'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader : 'ts-loader',
                        options: {
                            configFile: resolve(__dirname, 'conf', 'tsconfig.json')
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};