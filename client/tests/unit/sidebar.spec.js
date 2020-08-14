import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import SideBar from '@/components/SideBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(SideBar, { localVue })

describe('SideBar Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof SideBar.data).toBe('function')
		const defaultData = SideBar.data()
		expect(defaultData.open).toBeFalsy()
		expect(defaultData.overlay).toBeTruthy()
		expect(defaultData.fullheight).toBeTruthy()
	})
})