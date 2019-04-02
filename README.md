# ofa2-upload-file-to-remote

## how to use

- add next config to `config/env/xxx`

```js
{
  azureBlob: {
    accountName: '',
    accountKey: '',
    containerName: '',
    baseUrl: 'https://xxxx.blob.core.chinacloudapi.cn',
    fileKeyPrefix: 'dev',
  },

  qiniu: {
    accessKey: '',
    secretKey: '',
    scope: '',
    baseUrl: '',
    fileKeyPrefix: 'dev',
  },
}
```

- add next to `index.ts`

```js
import fileUploadToRemote from '@ofa2/upload-file-to-remote';

new Ofa2(__dirname)
  .use(config)
  .use(fileUploadToRemote);
```

## difference config

|                | 七牛          | azure blob    |
| -------------- | ------------- | ------------- |
| 用户名/账户    | accessKey     | accountName   |
| 密码/密钥      | secretKey     | accountKey    |
| 容器名         | scope         | containerName |
| 域名前缀       | baseUrl       | baseUrl       |
| 上传文件的前缀 | fileKeyPrefix | fileKeyPrefix |
