function parseDatatableStringToShortDates(
  datatable: ref<object>,
  colToChange: string
) {
  for (var i = 0; i < datatable.value.length; i++) {
    if ([datatable.value[i][colToChange]] != 0) {
      datatable.value[i][colToChange] = new Date(
        datatable.value[i][colToChange]
      ).toLocaleDateString();
    }
  }
}

export default parseDatatableStringToShortDates;
