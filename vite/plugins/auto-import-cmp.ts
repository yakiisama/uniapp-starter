import Components from 'unplugin-vue-components/vite'

export default function createAutoImportCmp() {
  return Components({ dts: 'src/types/auto-components.d.ts' })
}
