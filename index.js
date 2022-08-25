import I18n from 'i18n-js'
/**
 *
 * @param {string} textKey Text key from language files
 * @param {object} options i18n options
 * @param {string} nameSpace Custom namespace on i18n language files
 * @returns {string} text from i18n and default return common
 * @example function
 * texti18n('menu.home', {}, 'ADMIN')
 * texti18n('menu.home', {}, 'MODERATOR')
 * texti18n('menu.home', {}, 'USER')
 * @example i18n language files
 * menu : { menu: { home: 'Home' } }
 * ADMIN : { menu: { home: 'Admin Home' } }
 * MODERATOR : { menu: { home: 'Moderator Home' } }
 * USER : { menu: { home: 'User Home' } }
 */
export default (
	textKey,
	options = {},
	nameSpace
) => {
	if (nameSpace) {
		const textReturn = I18n.t(`${nameSpace}.${textKey}`, {
			...options,
			defaultValue: 'NULL',
		})
		if (textReturn !== 'NULL') {
			return textReturn
		}
	}

	const textOriginal = I18n.t(textKey, {
		...options,
		defaultValue: 'NULL',
	})

	if (textOriginal !== 'NULL') {
		return textOriginal
	} else {
		return I18n.t(textKey, { locale: 'en', ...options })
	}
}
