export function getErrorMessage(status) {
  if (status === 429) {
    return "Too Many Requests...";
  }
  if (status === 404) {
    return "Roster Does Not Exist... Try refreshing the page";
  }

  return "This Page Airballed... Try refreshing the page";
}
