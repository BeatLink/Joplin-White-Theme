/** Imports ****************************************************************************************************************************************/
import joplin from "api"
import { SettingItemType } from "api/types"

/** setupSettings ***********************************************************************************************************************************
 * Sets up the settings used by the plugin																											*
 ***************************************************************************************************************************************************/
export async function setupSettings(){
	console.info("Setting up Settings")
    
    await joplin.settings.registerSection("whiteTheme", {
        name: "whiteTheme",
        label: "White Theme",
        description: "Customizations for White Theme",
        iconName: "fas fa-paint-brush",
    })
    await joplin.settings.registerSettings({
		"accentColor": {
			label: "The accent color used throughout the UI",
			value: "#00acff",
			type: SettingItemType.String,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"itemHeight": {
			label: "The height in px of each notebook, note, or tag in the list",
			value: 35,
			type: SettingItemType.Int,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"fontSize": {
			label: "The size in px for the font of the main interface",
			value: 16,
			type: SettingItemType.Int,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"headingFontSize": {
			label: "The size in px for the headings in the sidebar",
			value: 20,
			type: SettingItemType.Int,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"headingIconVisibility": {
			label: "Whether to show the icons beside the sidebar headings",
			value: 'none',
            options: {
                'inline': 'Show',
                'none': 'Hide',
            },
            isEnum: true,
			type: SettingItemType.String,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"allNotesVisibility": {
			label: "Show the All Notes button",
			value: 'none',
            options: {
                'inline': 'Show',
                'none': 'Hide',
            },
            isEnum: true,
			type: SettingItemType.String,
			public: true,
			section: 'whiteTheme',
		}
	})
    await joplin.settings.registerSettings({
		"showEmptyFolderIcons": {
			label: "Show the folder icon even on notebooks without subnotebooks",
			value: 'initial',
            options: {
                'visible': 'Show',
                'initial': 'Hide',
            },
            isEnum: true,
			type: SettingItemType.String,
			public: true,
			section: 'whiteTheme',
		}
	})  
    await joplin.settings.registerSettings({
		"sidebarHeadingSpacing": {
			label: "The size in px for the space around the headings in the sidebar",
			value: 20,
			type: SettingItemType.Int,
			public: true,
			section: 'whiteTheme',
		}
	})  
}



// font color
// font size
// background color
// accent color
// hovel color
