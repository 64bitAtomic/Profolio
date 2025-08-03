.image-card {
    background: #130f2a;
    border-radius: 0.65rem ;
    border: 1.5px solid #6751b9;
    margin: 0 1rem;
    flex-direction: column;
    width: 22rem;

  }
  
  .image-placeholder {
    /* background-image: url('./assets/images/pro.webp'); */
    background-size: cover;
    border-radius: 0.6rem;
    position: relative;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #555;
  }
  .image-placeholder:hover {
    transform: scale(1.1);  ;
  }

  .certificate-name{
    position: absolute;
    bottom: 0; 
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); 
    color: white;
    padding: 10px 0;
    font-size: 0.5rem;
  }
  .certificate-name span{
    font-size: 1rem;
    font-weight: 700;
  }


  /* Modal overlay styling */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Modal container styling */
  .modal {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
  }
  
  /* Full-screen image styling */
  .modal-image {
    width: 100%;
    height: auto;
    max-height: 90vh;
    object-fit: contain;
  }
  
  /* Close button styling */
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #b1aaaa;
    background-color: #130f2a;
    border-radius: 0.3rem;
  }
  

















.certificate-container{
    margin: 4rem 0;
    position: relative;
}

.certificate-container h5{
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
}

.arrow-left,
.arrow-right{
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6751b9;
    border-radius: 0.65rem;
    border: 1.5px solid #6751b9;
    background: #130f2a;
    position: absolute;
    top: 55%;
    z-index: 2;
    cursor: pointer;

}

.arrow-left span,
.arrow-right span{
    font-size: 2rem;
    font-weight: 500;

}

.arrow-left{
    left: -2rem;

}
.arrow-right{
    right: -2rem;
}


@media (max-width: 1025px) {
    .arrow-left{
        left: 0rem;
    }
     .arrow-right{
        right: 0rem;
     }
}

@media (max-width: 768px) {
   .certificate-container h5{
     font-size: 1.3rem;
     margin-bottom: 2rem;
   }
   .arrow-left{
    left: -1rem;
   }
   .arrow-right{
    right: -1rem;
   }
}

    