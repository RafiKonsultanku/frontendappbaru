import './style/activity.css';

export default function index() {
  return (
    <div className='activity'>
        <span className='activityTitle'>Aktivitas Terbaru</span>
        <ul className="activityList">
            <li className="activityListItem">
                <div className="activityItem">
                    <span className="activityName">Bpk. Fulan</span>
                    <span className="activityTodo">Telah menambahkan faktur pajak</span>
                </div>
                <div className="activityTime">
                    beberapa saat lalu
                </div>
            </li>

            <li className="activityListItem">
                <div className="activityItem">
                    <span className="activityName">Bpk. Fulan</span>
                    <span className="activityTodo">Telah menambahkan faktur pajak</span>
                </div>
                <div className="activityTime">
                    beberapa saat lalu
                </div>
            </li>
        </ul>
    </div>
  )
}
