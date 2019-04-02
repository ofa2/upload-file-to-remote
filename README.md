# ofa2-upload-file-to-remote

## how to use

- add next config to `config/env/xxx` (choose one)

```js
{
  azureBlob: {
    accountName: '',
    accountKey: '',
    containerName: '',
    baseUrl: 'https://xxxx.blob.core.chinacloudapi.cn',
    fileKeyPrefix: '',
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
import uploadFileToRemote from '@ofa2/upload-file-to-remote';

new Ofa2(__dirname).use(config).use(uploadFileToRemote);
```

- add next when u upload

```js
await framework.uploadFileToRemote.uploadBuffer('fileKey', buffer);
```

## config difference

|                | 七牛          | azure blob    |
| -------------- | ------------- | ------------- |
| 用户名/账户    | accessKey     | accountName   |
| 密码/密钥      | secretKey     | accountKey    |
| 容器名         | scope         | containerName |
| 域名前缀       | baseUrl       | baseUrl       |
| 上传文件的前缀 | fileKeyPrefix | fileKeyPrefix |
