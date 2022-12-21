
export function formatDate(date: any) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1)].join(
      "/"
    );
}

function padTo2Digits(num: any) {
    return num.toString().padStart(2, "0");
}
  