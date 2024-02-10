import React, { useState } from 'react';

export const PlantForm = () => {
    const defaultImage = 'https://cdn.discordapp.com/attachments/1080886691067338815/1205841800234016798/image.png?ex=65d9d6b0&is=65c761b0&hm=14b8fd00ee032a4cb352c529d38eade498d4280e254033647c9f86c133ee5c3a&';

    const [imagePreview, setImagePreview] = useState(defaultImage);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div id="form">
            <form>
                <div className="inputs">
                    <input type="text" name='Name' placeholder='Your Name' autoComplete='off' autoCorrect='on' required />
                    <input type="text" name='dateofPlant' placeholder='Date of Plantation' autoComplete='off' autoCorrect='on' required />
                    <input type="text" name='Type' placeholder='Type of Plant' autoComplete='off' autoCorrect='on' required />
                    <textarea name='Comments' placeholder='Your Comments' autoComplete='off' autoCorrect='on' required cols="30" rows="10"></textarea>
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
