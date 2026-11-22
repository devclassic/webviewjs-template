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

#### Fedora 直接安装：

```sh
sudo dnf install -y webkit2gtk4.1 libxdo
```

#### Enterprise Linux **10** 需要先启用 EPEL（`webkit2gtk4.1` 只在 EPEL 10 里）：

```sh
# Rocky / Alma / CentOS Stream 10
sudo dnf install -y epel-release

# 已注册的 RHEL 10
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm

# WebKitGTK 4.1
sudo dnf install -y webkit2gtk4.1
```

#### 构建依赖：libxdo.so.3（Rocky / RHEL / Alma 10）

```sh
# 1. 编译工具链
sudo dnf group install -y "Development Tools"

# 2. X11 头文件
sudo dnf install -y libX11-devel libXtst-devel libXinerama-devel libXi-devel libxkbcommon-devel perl-podlators

# 3. 源码
cd /tmp
curl -LO https://github.com/jordansissel/xdotool/archive/refs/tags/v3.20211022.1.tar.gz
tar xzf v3.20211022.1.tar.gz && cd xdotool-3.20211022.1

# 4. 编译安装（INSTALLLIB 必须指定，否则库进 /usr/local/lib）
make
sudo make install PREFIX=/usr INSTALLLIB=/usr/lib64
sudo ldconfig

# 5. 验证
ldconfig -p | grep xdo
```
