import GObject from 'gi://GObject';

import {ExtensionBase, setExtensionManager} from './sharedInternals.js';
import {extensionManager} from '../extensionsService.js';

setExtensionManager(extensionManager);

export {gettext, ngettext, pgettext} from './sharedInternals.js';

export class ExtensionPreferences extends ExtensionBase {
    /**
     * Fill the preferences window with preferences.
     *
     * @param {Adw.PreferencesWindow} _window - the preferences window
     */
    fillPreferencesWindow(_window) {
        throw new GObject.NotImplementedError();
    }
}
