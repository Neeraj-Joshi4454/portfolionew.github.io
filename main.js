
const data  = [

    {
        title : "Sample 1",
        rating : "3/5",
        cover : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1710979200&semt=ais",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },
    {
        title : "Sample 1",
        rating : "3/5",
        cover : "sample cover",
        quality : "720p",
        link : "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9040234_x__adext__ptid_kwd-303629226711"
    },

]


data.map((val, i) => {
    document.getElementById('moviesDiv').innerHTML+=`
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="${val.cover}" height="300" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${val.title}</h5>
                    <p class="card-text">${val.rating}</p>
                    <a href="${val.link}" class="btn btn-dark">Watch Now</a>
                </div>
            </div>
        </div>
    `
})