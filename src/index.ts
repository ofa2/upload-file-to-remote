import { lift as azureBlob } from '@ofa2/azure-blob';
import { lift as qiniu } from '@ofa2/qiniu';

export default function lift(this: any, config: any) {
  if (config.azureBlob) {
    azureBlob.call(this, config);

    this.uploadFileToRemote = { uploadBuffer: this.azureBlob.uploadBuffer.bind(this.azureBlob) };
  } else if (config.qiniu) {
    qiniu.call(this, config);

    this.uploadFileToRemote = { uploadBuffer: this.qiniu.uploadBuffer.bind(this.qiniu) };
  }

  throw new Error('no support adapter');
}

export { lift };
