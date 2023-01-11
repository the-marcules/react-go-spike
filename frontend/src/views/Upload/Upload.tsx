import './Upload.css';
import { ChangeEvent, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Upload() {
    const [fileToUpload, setFile] = useState<File>();

    const uploadFile = () => {
        if (!fileToUpload) {
            console.log('no file given');
            return;
        }
        console.log('now uploading file ', fileToUpload.name);

        const formData = new FormData();
        formData.append('File', fileToUpload);

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }

        fetch('http://localhost:10000/fileUpload', {
            method: 'POST',
            body: formData,
            headers: {
                // 'content-type': 'multipart/form-data',
                'content-length': `${fileToUpload.size}`,
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

    const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        setFile(file);
    };

    const { t } = useTranslation();
    return (
        <div>
            <div>
                <h2>{t('welcome')}</h2>
                <p>{t('subWelcome')}</p>
            </div>
            <div className="upload-div">
                <h3>{t('file-upload-heading')}</h3>
                <input type="file" name="file" onChange={selectFile}></input>
            </div>
            <div className="upload-div">
                <button onClick={uploadFile}>{t('Upload')}</button>
            </div>
        </div>
    );
}
