import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const host = process.env.DEPLOYHOST ?? 'deploy@142.93.106.59'
const remotePath = process.env.DEPLOYPATH ?? '/tmp/katanalab-dist'
const distDir = resolve('dist')

execSync('npm run build', { stdio: 'inherit' })

if (!existsSync(distDir)) {
	process.stderr.write('dist/ was not created\n')
	process.exit(1)
}

execSync(`scp -r dist ${host}:${remotePath}`, { stdio: 'inherit', shell: true })
execSync(`ssh ${host} "sudo deploy-katanalab ${remotePath}"`, {
	stdio: 'inherit',
	shell: true,
})
