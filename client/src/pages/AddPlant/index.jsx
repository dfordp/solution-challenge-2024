import { useState } from 'react';

const PlantForm = () => {
    const defaultImage = 'https://cdn.discordapp.com/attachments/1080886691067338815/1205841800234016798/image.png?ex=65d9d6b0&is=65c761b0&hm=14b8fd00ee032a4cb352c529d38eade498d4280e254033647c9f86c133ee5c3a&';

    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [name, setName] = useState('');
    const [dateOfPlant, setDateOfPlant] = useState('');
    const [type, setType] = useState('');
    const [comments, setComments] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, dateOfPlant, type, comments, image });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setImage(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" name='Name' placeholder='Your Name' autoComplete='off' autoCorrect='on' required value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" name='dateofPlant' placeholder='Date of Plantation' autoComplete='off' autoCorrect='on' required value={dateOfPlant} onChange={e => setDateOfPlant(e.target.value)} />
                    <input type="text" name='Type' placeholder='Type of Plant' autoComplete='off' autoCorrect='on' required value={type} onChange={e => setType(e.target.value)} />
                    <textarea name='Comments' placeholder='Your Comments' autoComplete='off' autoCorrect='on' required cols="30" rows="10" value={comments} onChange={e => setComments(e.target.value)}></textarea>
                    <button type='submit'>Send Details</button>
                </div>
                <div className="file-upload-container">
                    <input type="file" id='inp' name='Image' accept='image/jpeg,image/gif,image/png' autoComplete='off' autoCorrect='on' required onChange={handleImageChange} />
                    <label htmlFor="inp" className="file-upload-button">Choose File</label>
                    {imagePreview && (
                        <img className="image-preview" src={imagePreview} alt="Plant Preview" />
                    )}
                </div>
            </form>
        </div>
    );
};

export default PlantForm;