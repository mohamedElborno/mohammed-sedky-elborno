export const formatLocalizedDate = (
  dateString: string,
  locale: "ar" | "tr"
) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();

  const months = {
    ar: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    tr: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
  };

  const monthName = months[locale][date.getMonth()];
  return `${day} ${monthName} ${year}`;
};
