export function onChangeDeparture(e) {
    return {
      type: 'ON_CHANGE_DEPARTURE',
      payload: {
        payload:e.target.value
      },
    }
  }