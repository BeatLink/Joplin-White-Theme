import joplin from 'api';
import { loadUI, loadNote } from './core/css';
import { setupSettings } from './core/settings';

joplin.plugins.register({
	onStart: setupPlugin
});


async function setupPlugin(){
	await setupSettings()
	await joplin.settings.onChange(loadCSS)
	await loadCSS()
}

async function loadCSS(){
	await loadUI();
	await loadNote()
}