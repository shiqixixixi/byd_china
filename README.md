# byd_china

该仓库的代码来自论坛搬运，原始来源：
https://bbs.hassbian.com/thread-32194-1-1.html

请在使用前确认原作者许可并遵守相应授权。

## 简介

本仓库包含用于 Home Assistant 的（byd）相关集成/脚本/资源的代码（由论坛搬运）。

> 注：本 README 为仓库添加基本说明与 HACS 安装说明。如需更具体的配置示例或集成说明，请将仓库内的组件名称与配置项告知，我会补充详细配置示例。

## HACS 安装（通过自定义仓库）

如果你希望通过 HACS 安装此集成，请按照下面步骤操作：

1. 在 Home Assistant 中打开 HACS（Home Assistant Community Store）。
2. 点击右上角的三点菜单（更多选项），选择 “Custom repositories”（自定义仓库）。
3. 在弹出的对话框中，输入本仓库的 URL：
   - https://github.com/shiqixixixi/byd_china
4. 在 "Category"（类型）下拉中选择 "Integration"（集成） 或 根据仓库实际内容选择合适的类别（例如：Integration、Plugin、Theme 等）。
5. 点击添加（Add）。
6. 返回 HACS 的主界面，打开对应类别（如 Integrations），在列表中查找并安装本仓库提供的集成。
7. 安装完成后，重启 Home Assistant。
8. 重启后在设置 -> 集成 中添加并配置该集成，或根据仓库中的说明在 configuration.yaml 中进行配置。

说明：如果在 HACS 中无法直接找到该仓库，请确认仓库已正确添加为自定义仓库并且仓库结构符合 HACS 要求（例如：自定义集成应放在根目录的 custom_components/<integration_name> 目录下）。

## 手动安装（备用）

如果不使用 HACS，可以手动安装：

1. 在仓库中找到 custom_components 目录（或对应的集成目录）。
2. 将该目录复制到 Home Assistant 的配置目录下的 custom_components/（保持子目录结构不变）。
3. 根据仓库内的说明在 configuration.yaml 中添加相应配置项（如果没有，请在 Issues 或 README 中询问作者）。
4. 重启 Home Assistant。

## 使用与配置

仓库内的具体配置项请参照源码文件或原始论坛帖（链接见上）。如果你希望我为本仓库生成配置示例，请告诉我：

- 集成的英文目录名（例如：custom_components/byd_china 下的具体组件名），
- 或者把该组件的 manifest.json / README 或配置说明发给我， 我会基于实际字段生成配置示例。

## 贡献

欢迎提交 Issues 或 Pull Requests。若你对 README、安装步骤或配置示例有改进建议，请发起 PR 或在 Issues 中描述。

## 许可证

仓库当前未在本 README 中指定明确的开源许可证。由于代码来自论坛搬运，请先确认原始作者的许可授权。如果你希望我帮你添加一个常用许可证（例如 MIT、Apache-2.0 等），请告诉我选择的许可证类型。

---

如果你确认要我将此 README 提交到仓库，我已为你准备了该文件并将其提交到仓库的默认分支。若需将其提交到特定分支或需要修改内容，请告诉我具体要求。
