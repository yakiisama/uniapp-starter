import uni from '@dcloudio/vite-plugin-uni'
import createAutoImport from './auto-import'
import createAutoImportCmp from './auto-import-cmp'

export default function createVitePlugins() {
  const vitePlugins: any[] = [uni()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createAutoImportCmp())
  return vitePlugins
}
