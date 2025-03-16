# 鸟服线路使用建议
:::warning
线路不要泄漏，自己好好使用就行了，以免账号被杀
:::

## 主线路
基于Cloudflare。对大陆连接情况因地区而异。挂梯的话全球都可以，通常建议挂梯使用

## 机场线路
机场线路基于内网线路，减少多层套娃转发，直达杜甫路由器，但需要合作机场支持。  
详情可查看[合作机场](/airport)

## 裸IP线路
裸IP线路，可被用来反向代理或者如苏州等屏蔽域名的地方直连使用  
下面是鸟服一键反向代理脚本，复制在服务器上回车即可执行，推荐使用debian11或ubuntu22.04以上系统执行
```bash
sudo bash -c "$(curl -fsSL https://raw.githubusercontent.com/kuefone/forwardlyrebirdemby/main/fdlyrebird.sh)"
```

## 白名单线路
白名单线路是大陆优化线路，可被用来白名单用户直连，但会被限速100Mbps  
非白名单使用被机器人扫到会被封禁账号

