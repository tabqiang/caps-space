//ref: https://github.com/vitejs/vite/blob/main/scripts/release.ts
import { release } from '@vitejs/release-scripts';
import { logRecentCommits, run } from './release-utils';

release({
    repo: 'caps-space',
    // List of options. Choice will be available in following callback as `pkg`
    packages: ['@caps-space/vue3', 'components', 'theme-chalk', 'utils'],
    toTag: (pkg, version) => (pkg === '@caps-space/vue3' ? `v${version}` : `${pkg}@${version}`),
    logChangelog: pkg => logRecentCommits(pkg),
    generateChangelog: async (pkgName, version) => {
        const changelogArgs = [
            'conventional-changelog',
            '-p',
            'angular',
            '-i',
            'CHANGELOG.md',
            '-s',
            '--commit-path',
            '.',
        ];
        await run('npx', changelogArgs, { cwd: `packages/${pkgName}` });
    },
});
