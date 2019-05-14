
import { _setIntlObject, addLocaleData, IntlProvider, intlShape } from 'umi-plugin-locale';

const InjectedWrapper = (() => {
  let sfc = (props, context) => {
    _setIntlObject(context.intl);
    return props.children;
  };
  sfc.contextTypes = {
    intl: intlShape,
  };
  return sfc;
})();


const baseNavigator = true;
const useLocalStorage = true;

import { LocaleProvider } from 'antd';
import moment from 'moment';
let defaultAntd = require('antd/lib/locale-provider/en_US');
defaultAntd = defaultAntd.default || defaultAntd;

const localeInfo = {
  'en-US': {
    messages: {
      ...require('/Users/wenghengcong/MyApps/iOS-Compass/compass/src/locales/en-US.ts').default,
    },
    locale: 'en-US',
    antd: require('antd/lib/locale-provider/en_US'),
    data: require('react-intl/locale-data/en'),
    momentLocale: '',
  },
};

let appLocale = {
  locale: 'en-US',
  messages: {},
  data: require('react-intl/locale-data/en'),
  momentLocale: '',
};

const runtimeLocale = window.g_plugins.mergeConfig('locale') || {};
const runtimeLocaleDefault =  typeof runtimeLocale.default === 'function' ? runtimeLocale.default() : runtimeLocale.default;
if (useLocalStorage && localStorage.getItem('umi_locale') && localeInfo[localStorage.getItem('umi_locale')]) {
  appLocale = localeInfo[localStorage.getItem('umi_locale')];
} else if (localeInfo[navigator.language] && baseNavigator){
  appLocale = localeInfo[navigator.language];
} else if(localeInfo[runtimeLocaleDefault]){
  appLocale = localeInfo[runtimeLocaleDefault];
} else {
  appLocale = localeInfo['en-US'] || appLocale;
}
window.g_lang = appLocale.locale;
appLocale.data && addLocaleData(appLocale.data);

export default function LocaleWrapper(props) {
  let ret = props.children;
  ret = (<IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
    <InjectedWrapper>{ret}</InjectedWrapper>
  </IntlProvider>)
  ret = (<LocaleProvider locale={appLocale.antd ? (appLocale.antd.default || appLocale.antd) : defaultAntd}>
    {ret}
  </LocaleProvider>);
  return ret;
}
