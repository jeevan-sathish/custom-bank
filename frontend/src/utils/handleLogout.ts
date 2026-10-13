export function handleLogout(): void {
  localStorage.removeItem("cb_access_token");
  localStorage.removeItem("cb_refresh_token");

  window.location.href = "/";
}
