import { buildWebpackConfig } from './config/webpackBuilder/buildWebpackConfig';
import path from 'path';
import { BuildEnv } from './config/webpackBuilder/types/config';

export default (env: BuildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    };
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 5000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const project = 'frontend';

    const config = buildWebpackConfig({
        paths,
        mode,
        isDev,
        apiUrl,
        port: PORT,
        project
    });

    return config;
};