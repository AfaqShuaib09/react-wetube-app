import React from "react";
import { Modal } from "react-bootstrap";

function VideoPlayerModal(props) {
  return (
    <Modal
      size="xl"
      dialogClassName="d-flex align-items-center"
      show={props.visible}
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.video.snippet.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Description */}
        <div className="video-info mt-2">
          <h4>{props.video.snippet.title}</h4>
          <p>{props.video.snippet.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn btn-danger">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default VideoPlayerModal;
