/**
 * useStore as react custom hooks
 */
import counter from '../stores/counter'
import banner from '../stores/banner'

const useStore = () => ({ counter, banner })

export default useStore
