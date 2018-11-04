import { shallowMount } from '@vue/test-utils';
import SpeechToText from '../../src/lib/components/SpeechToText.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(SpeechToText, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
