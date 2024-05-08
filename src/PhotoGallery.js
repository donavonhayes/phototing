// PhotoGallery.js
import React, { useState } from 'react';
import Gallery from './Gallery';

const PhotoGallery = () => {
  const initialPhotoUrls = [
    'https://uc9d36ae8d4e2bf22fd0090d3029.previews.dropboxusercontent.com/p/thumb/ACKq1OEQELlm8tgQiLa21Ps_N4aeWM6eaf3UwcDGyyXfVH5CZ8d_ZG5GtMJtiGFmCQQMCK5kFQT7lrcmCLXfb4AGSMVqif_2gnlGfU89cSN-PYge4YleAyvtrkL4J_0TBOcaWuVFixCnYO8hMBsRmt8bnCIbqSinh1coK2oUnCn2ln_zbEGMEGoUnWcQoVECQv_IOn7OxfVWZjX0LzC-0yL4cUOeAdllvAgZa5gdN3CQ3ODKCJiwLxujr6yO-7U_-e__uVIlQ6LJGsDBjOJmGyGQ8d4mEHVxPsPC3WgtaOmfCDTgWQp5vJFT7XbQcErE23zQP3ZXQ9zblWb_QFnFsTKWi6kK9NTTSKMh_-WUmk0QJjXdrrpoFFt8AEgKRbV4nHr7cdvaE-tsXS4L2E6K7cv0/p.jpeg',
    'https://uc981b70baa0d7f79228d5e2f7b7.previews.dropboxusercontent.com/p/thumb/ACIwy9qkD3BmtPW_MBG4j3PhvkHiybGFs7ytf8CWnDrsOwhYBVWvlzsxuSfvPqIXkhgYfr1AKRRxfwCoonpjxuyCeJvGIVFDLl0RHIBP1kLuCxHeaPuFFnm5XvtY3Sn6C257yshbo2MGmD1JBGdP7mys4K3OdzNkOg4K6wiIU21nlN9mMG4bNN6eLAmkZ7khoWws1GDL23_EWF4WLk6gHJDCS4YpA_Pxclovh-5UoSil7KUb_eGREHoduposUqd9ubO2qQ4ZkF8Oc0CdB3B9SHJ1p-QbrQcD2-DpHPofycQ95_JzRexoWAll7BiVQP0SXChlJjmDMPshm8y1_0ghXm9ddQK70huqL9nynBpTHqInMheZZ4Pst3H23oIdcGhGguhZGuDS8kZmnXpDgdb63f8b/p.jpeg',
    'https://uc7b8cf4eb40e7e189122a95a950.previews.dropboxusercontent.com/p/thumb/ACJHb_mlvSTG_CXyc7a76RonLsCETJWE6Y5lJa9HREinymEd8iwo4GUcraA7YWzml97ZpjUTT5B-VcCscjS_RMMXB6oBt1xiy26hCgvalImNUYSqMi7EVmOupI5sgVXLC6lKPKO-PJRFeLTWWQXNkMvnBHq75NxEEo-y-DMW-F7VfPVgzmgxyCRCDxPMI7zwA61yLsHP1RvnlKP7hIgYGlyy91nmIxoGaWJiIPC79fA9ihTjO12ECYBVk_ZJtZEPtwdw_iQWNG7c32zQBnzRg_tLyzSc6zAkt1Tjvo_W7kJwZCeLl-4NHykxOSZQggZEYh-rPb6drnD7AVdshBbvJ8MSrvMOuiSsS2IGLd05QV2JQlGAe0s36OaJCd1cLyYnPvGxEkRfmtXYRZW7EdRDGhcx/p.jpeg',
    'https://uc80bcdc7fe179a33863c4ffff39.previews.dropboxusercontent.com/p/thumb/ACJoxRGLWGk8bRpPWwQHwKtl6G-jicyuzWQqe0Ym05aSjYo3fgm44qP37X4YZ15emKiSlCVoRKXvWpJ_cFuxeMXNPbPcEIYHeRTliZhodw2gr25l0BAOHLi5w6CJQ49krWrrbmCg2FO49YHxuLrHTkIFnee77dWBea5I_HqzHAPvX97hDaxIVUynHBTBfLLiagyp3r41QgmZeX3MZZNHuLUoAuFLGBrJs4XWmJjvCLP5uPY-tegKkI9ae--XmVCdLVp4IQSTQRVdiQKwiQzLVyxNfneCmAi0YN3BPdU3MwSkzyDO_c_UJfuTs0pE03fmsXxuh_0a5VKhdbtazWC8h91ufSZJovl7l1BcjgpzggTRhj4HS0YPDXJeRCUkj1ft6jSnJ8-GX7r71bc5He_6m5ic/p.jpeg',
    'https://uc1c6c2e2803516105ab551e46f6.previews.dropboxusercontent.com/p/thumb/ACJQ9GGHCGmkV6x3nlyxSR6Sl5Cebj4x9HVOfBwXasuE0g9_s6DW3TmNtQ2jrweT5dbWI8_Qm8OwA1f5X2TjIGFopcs6R-ctkqtAWSBQ7NWBZs84SgKqCzWHfR0o62SU_Eeh3uSI-l_iqU0tU867kYoj5ynzgHzDFavdZFM8Tvj5RlDC5zWJV6w1Ay1xxlcV2UbaqzwcXTM6NALz9YRd70s_JnmNvwgUi7iknxLqb_B-FfgSjGXMtl0IjHnIT3W1kieDk8lQyjqezAso5YY64MGWNXZTJIN6lBOrFkIbUnJUAxcKkzHg-PDTJKTSPThd4VsP99yJfRXLUNGvRlW9H-yPoEKESni9uwK3kMYbU1VAWL_j72kPfZwHG57UzW9AUvGIGoXAqGCLTi8XZhGDeIB0/p.jpeg',
    'https://ucccb3f47d983c18091bcbff9a51.previews.dropboxusercontent.com/p/thumb/ACL5D54dlQ7L8QGw32t5zR1GVlSiBrKOWpM5W3ngW-Rahw6qUWDG0jKNj808JhDn1yrATWXSC3kR2-yWxEO9gAqk50LqkfAFmBJ9iuOPeMK9JArNaFczrnus0BaDqBIsRIG-8sL95UEMc8hPwbEFa85KWNcxzKLFiwjFQ3fAH9EToOA3X3p-aVHw82m1uwylfrwj2HPwf57glQJ9yZCrmO9CqoLC1Johm0w6XLUvuhVc6nCqJ2kI3R5HD1A99gwS-g70tHHsDF3BUURBgWg7HFUvUrBXoIm397aPGIe37h3QALsxK4_UA-WJOuNKzvwSa8pMi6ZUU8W2j_4sdbAP-yQL_doNXfdhVj8pWIctW-y4Wvfaylv7s5meb2A0k_j2IxGGMphkw4eVrYg3PlgngFbP/p.jpeg',
    'https://uc70029c2549b85908dade6ade4a.previews.dropboxusercontent.com/p/thumb/ACJFD5tkbp8jr_Q7kDwL-zNq1JAwk338E3uZy5fRYPrA_4iH56HKPREcpVmJQZ2-qEnodcjwTqXJrLouLnPThhA0abWgrg6X4DdOs6Dz3ayJ1E6kiWj-qp1ZNjaG9TxRj1c4W0fK0aH-Dgxln0HgF5avkr2YYDtSmRI1Et_B0UZ51-DPsXTKg4O7tVMdTRQD4xBPxqIrmo2cgXQVOGxXZZsedEtrDgBGC8HK7ezkaWEQyomug66RkTBigfYBSHEW1SbWLrI2UfiurE0aEiILX0fLfuOW5KISZpQewbCUJmzR_AH0-sSLKaC48_h8OXarzidHAEM1aoX5l6NO2VIAErTjWhlYlB0Ja2T08Tc__2jurtKNd1_u-GH9xVwnMroitvlN7RqGUciQoKu_V5JUWemi0Ngnk1Zuq8lyU-zec-pQlBmXYVqO2oKuC4gwFA8HIVksCjDpzhrkwwzw20qkHsorD-oipqmI2B7D2fylZXoq9Txdpknbg_XAhLao71aABRzvJiyvo5HjkXkWlL0uGHlF3a3j1Jja4pzreFlnmOvTfjuZqmOKseMBf64SkM1CSA9C8hXl1h-LiAm25FukPpwkoTZlAeBbZfGXx3Whjt7EsK3fPq9RFvkPFjK4E60_cOWxxs7DBoHNIeHcIkTKlUhZJG1AKqbuF53wRSBL-cgTUEX5vaQoKwfI2nPMVoumQGRljION1EILSjzXBnEKMYCpl7Cbm_Gfsqta_OCguRfKks-vAovIWKvV37SJwK0m7PRyBXU_J3V8ZLKFinBYqs1zanY4erpYezZlM9fS1RlN4ZMy1mlLtYdt_ptRN2ydRzLbSKV0B_GjnYSPkdqVmy1dvF7WYe4qXycO6juL_Gluu0sH-YjldPZVEduU5aesv6g/p.jpeg',
  ];

  
  const [photoUrls, setPhotoUrls] = useState(initialPhotoUrls);

  const addMorePhotos = () => {
    // Add more photo URLs to the existing list
    const newPhotoUrls = [...photoUrls, 'new_url1.jpg', 'new_url2.jpg', 'new_url3.jpg'];
    setPhotoUrls(newPhotoUrls);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <h1>Shutter Fields Photography</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', justifyContent: 'center' }}>
        {photoUrls.map((url, index) => (
          <Gallery key={index} url={url} />
        ))}
      </div>
      <button onClick={addMorePhotos}>Add More Photos</button>
    </div>
  );
};

export default PhotoGallery;