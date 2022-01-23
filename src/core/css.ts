import joplin from "api";
const fs = joplin.require('fs-extra');


export async function loadUI() {
    const installDir = await joplin.plugins.installationDir();		
    const originalChromeCssFilePath = installDir + '/css/chrome.css';
    const tempChromeCssFilePath = installDir + "/css/tempchrome.css"
    var cssString = await fs.readFile(originalChromeCssFilePath, 'utf8');
    var replacementDict = {
        "<<ITEM_HEIGHT>>": await joplin.settings.value("itemHeight"),
        "<<FONT_SIZE>>": await joplin.settings.value("fontSize"),
        "<<HEADING_FONT_SIZE>>": await joplin.settings.value("headingFontSize"),
        "<<ACCENT_COLOR>>": await joplin.settings.value("accentColor"),
        "<<HEADING_ICON_VISIBILITY>>": await joplin.settings.value("headingIconVisibility"),
        "<<ALL_NOTES_VISIBILITY>>": await joplin.settings.value("allNotesVisibility")
    }
    for (let key in replacementDict){
        cssString = cssString.replace(key, replacementDict[key])
    }
    await fs.writeFile(tempChromeCssFilePath, cssString)
    await (joplin as any).window.loadChromeCssFile(tempChromeCssFilePath);
}

export async function loadNote(){
    const installDir = await joplin.plugins.installationDir();		
    const originalNoteCssFilePath = installDir + '/css/note.css';
    const tempNoteCssFilePath = installDir + "/css/tempnote.css"
    var cssString = await fs.readFile(originalNoteCssFilePath, 'utf8');
    var replacementDict = {
        "<<ACCENT_COLOR>>": await joplin.settings.value("accentColor"),
    }
    for (let key in replacementDict){
        cssString = cssString.replace(key, replacementDict[key])
    }
    await fs.writeFile(tempNoteCssFilePath, cssString)
    await (joplin as any).window.loadNoteCssFile(tempNoteCssFilePath);
}