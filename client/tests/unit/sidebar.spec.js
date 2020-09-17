import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import SideBar from '@/components/SideBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: { name: '' },
	token: ''
}

const wrapper = shallowMount(SideBar, { store, localVue })

describe('SideBar Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof SideBar.data).toBe('function')
		const defaultData = SideBar.data()
		expect(defaultData.open).toBeFalsy()
		expect(defaultData.fullwidth).toBeTruthy()
		expect(defaultData.fullheight).toBeTruthy()
	})

	it('Should open and close the Sidebar on Store Commit', () => {
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
		wrapper.vm.$store.commit('changeSideBarState')
		expect(wrapper.vm.$store.state.sideBarOpen).toBeTruthy()
		wrapper.vm.$store.commit('changeSideBarState')
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
	})
})
