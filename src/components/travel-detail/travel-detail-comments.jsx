import { useEffect, useRef, useState } from "react";
import { apiCall } from "../../utils/api-call.js";

import "./travel-detail-comments.css";
import { FormButton } from "../forms/form-button.jsx";
import { Form } from "../forms/form.jsx";
import { createCommentSchema } from "../../validations/travels/create-comment.js";
import { Textarea } from "../forms/textarea.jsx";
import { useCurrentUser } from "../../hooks/current-user.js";
import { toast } from "react-toastify";
import { TravelComment } from "../travel-comment.jsx";

export function TravelDetailComments({
	travel,
	inputAutoFocus,
	setInputAutoFocus,
}) {
	const [comments, setComments] = useState([]);
	const currentUser = useCurrentUser();
	const textAreaRef = useRef();

	useEffect(() => {
		if (inputAutoFocus) {
			textAreaRef.current.focus();
			setInputAutoFocus(false);
		}
	}, []);

	async function getComments() {
		try {
			const { list } = await apiCall("get", `/travels/${travel.id}/comments`);
			setComments(list);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getComments();

		const intervalId = setInterval(() => {
			getComments();
		}, 60 * 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [travel.id]);

	async function onCreateNewComment(data) {
		try {
			const { id } = await apiCall(
				"post",
				`/travels/${travel.id}/comments`,
				data
			);

			const newComment = {
				...data,
				travelId: travel.id,
				user: { ...currentUser },
				id,
			};

			setComments((old) => [...old, newComment]);
			toast.success("Comentario creado correctamente");
		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<>
			<Form
				onSubmit={onCreateNewComment}
				validationSchema={createCommentSchema}
				resetOnSubmit={true}
			>
				<h3>Deja tu comentario</h3>
				<Textarea ref={textAreaRef} name="message" label="Mensaje" />
				<FormButton>Enviar!</FormButton>
			</Form>
			<ul className="travel-detail-comment-list">
				{comments.map((comment) => {
					return (
						<TravelComment
							key={comment.id}
							comment={comment}
							onDelete={() => {
								setComments((old) => old.filter((c) => c.id !== comment.id));
							}}
						/>
					);
				})}
			</ul>
		</>
	);
}
