import { enGB, fr } from 'date-fns/locale';

const languageLocale = {
  en: enGB,
  fr: fr,
};

export default function(language) {
  return languageLocale[language];
}
