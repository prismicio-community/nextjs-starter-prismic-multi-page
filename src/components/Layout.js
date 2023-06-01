import { Header } from "./Header";

export function Layout({ navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
    </div>
  );
}
