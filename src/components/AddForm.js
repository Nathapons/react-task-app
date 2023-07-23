import './AddForm.css';

export default function AddForm(props) {
    const { text, setText, saveTask, editId } = props;

    return (
        <>
            <h2>แอพบริหารจัดการงาน</h2>
            <form onSubmit={saveTask}>
                <div className="form-control">
                    <input type="text" className="text-input" value={text} onChange={(e) => setText(e.target.value)} />
                    <button type="submit" className="submit-btn">
                        {editId? "Update": "Add"}
                    </button>
                </div>
            </form>
        </>
    )
}