import { lift as azureBlob } from '@ofa2/azure-blob';
import { lift as qiniu } from '@ofa2/qiniu';

async function lift(this: any) {
  if (this.config.azureBlob) {
    azureBlob.call(this);

    this.uploadFileToRemote = { uploadBuffer: this.azureBlob.uploadBuffer.bind(this.azureBlob) };
  } else if (this.config.qiniu) {
    qiniu.call(this);

    this.uploadFileToRemote = { uploadBuffer: this.qiniu.uploadBuffer.bind(this.qiniu) };
  }

  throw new Error('no support adapter');
}

export { lift };
export default lift;
