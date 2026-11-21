# webviewjs 桌面应用开发模板

bun/deno + vite + webview

## 平台依赖

`@webviewjs/webview` 使用各系统自带的 WebView，不需要额外安装浏览器内核。

| 平台    | 系统运行时                           |
| ------- | ------------------------------------ |
| Windows | WebView2 Runtime                     |
| macOS   | 系统自带 WebKit（10.15 Catalina 起） |
| Linux   | WebKitGTK 4.1 + libxdo               |

### Windows

[WebView2](https://developer.microsoft.com/microsoft-edge/webview2)

### Linux 最小运行依赖

#### Debian / Ubuntu

```sh
sudo apt install -y \
  libwebkit2gtk-4.1-0 \
  libxdo3
```

#### RHEL / Rocky / Alma / CentOS Stream / Fedora

Fedora 直接安装：

```sh
sudo dnf install -y webkit2gtk4.1 libxdo
```

Enterprise Linux **10** 需要先启用 EPEL（`webkit2gtk4.1` 只在 EPEL 10 里）：

```sh
# Rocky / Alma / CentOS Stream 10
sudo dnf install -y epel-release

# 已注册的 RHEL 10
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm

sudo dnf install -y webkit2gtk4.1 libxdo
```
