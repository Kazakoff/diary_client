<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="university" class="view">

        <p style="font-size: 24px; font-weight: bold;">{{ msg.university }}</p>

		<div class="admin-panel">
			<div>
				<button class="mui-btn mui-btn--raised" @click="showFacultyModal">{{ msg.add_faculty }}</button>
				<button class="mui-btn mui-btn--raised" @click="showGroupModal">{{ msg.add_group }}</button>

				<label for="register-users" style="cursor: pointer; margin-left: 5px;">
					<img v-bind:title="msg.register_users" uk-tooltip class="icon icons8-Добавить-группу-пользователей,-мужчины" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADD0lEQVRoQ+1XQVIaQRR9v9GIuiEVx8Aq3CBkp8MieoLgCYQTmJwgcoJwAyYnCJ4guGDiLuQG7IZiTIWNEoPwU93WWGbKoWeGGRNT01UsqO7f/7/3/v/9h/DIFz3y+JEB+NsKZgpkCizJQJZCSxK4tHmmwNIULnlBpkAQgYVCpbC6tn4IQXUCVeQ5BvcxZ2t6Nfk4HvfH99k+296tCSGOiLCnbBhdxqx5Pjzr3nc+FQUMw6xgBW0vcL9jBeQaDde1+3f3jKLZJqL6vaQwN0dD+9i/lzgAxfz6xueg4L0AJIjp5HLfU0Iyn8uJT4tKYs6zfb8SiQPYKlXfCuBDmNqcA+/OnV5LnjWKZpeIXi+yY+ZTd2ir1PKWFsB2qcp3DUZOb6GNUTK/6ti/q4Lr2K/kf7+fICB+/4kDCBuIF6AXUFi7fxZAmBQC+GTk2LWUU6jaJ+BlmBpg4Jvr9FSLTa2Io9ZA3CJWhVwyWwQ6SrSNRgVw00Y3uzoVJPvTycWe/0HbKu7sEcSx15Fk52HMj7UPWdgiCtMdbh4ysoJAyOBxzXX/QxYm7QIfsiQBSCdSiZX1zToB8qdqQgbOgHU9ubCCRomoIG7baNIAogYS9/z/AyCIgahFHJfJ2+mVRA2ECgGFm7Rj2ZYHzNSZ/rw48ade4i9xHABqhM6Jthd00B0MjIm5NRrazdRmIclkbm3jtSDUACoTuAyisnLIPGDQAODBnNGZXV2eeozK9ikgLBC90JPAnV+Ty4a0TUyBQnGnvArxPnCeD4iKma0p5s3x8Gyg0ii/2SLCYRgQI8c+SASA8Xz3iIRQY3HcxcwNd2hb6kUuVq0wIOQ4vjSAhV9REdFINdyh3ZBm2yWzA9CbRVeomojo44/jSQbvXeyBkOn0JL/R19VEbABhpse45Mxm84Pvoy8do2jWiai96J7YAIxS9Yeu7cUFIFPDdXpP1TiSz6txO2jFBrDs6KEDp/t0Df0OBDnKAGgkSF0BXQo81H7sGnioAHV+MgA6htLezxRIm2Hd/ZkCOobS3s8USJth3f2/AeJ0bOYlHbu+AAAAAElFTkSuQmCC"/>
				</label>
				<input type="file" id="register-users" style="display: none" @change="registerUsers"/>
			</div>
		</div>

		<!--TODO DISPLAY FACULTIES-->
		<div v-for="faculty in faculties()">
			<span @click="showRemoveModal(faculty.id)" style="cursor: pointer; margin-right: 10px;">
				<img class="icon icons8-Удалить" width="23" height="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABQklEQVRoQ+1ZMW7CQBDcRYI2NCCo8BNcIngEPCH5AU/hB+EJySNipeQJUGGZBlqQWM6FJSIk3645y3I0bj13NzO7Nyf7mFr+cMv5EwQ0XUFU4F9VYDCavTPzZ5koEdkc0+QjlPBgLaQhX5AOKUItYDieSyjXNPNkhx8VNxUoXxACNLY/YFABo2GNwdV7oDGGnoXNAurezNreL3RBQOjWQgV8jmIPeBxCC6GFfA6ghf46gIPsxY55Go4U8jmKgwwphBSq9/cKUggp5HMAKYQUQgqV7gLEqC9E3EXGyd3CvPlwld6L7LM0iSxjK3zQzL6IeGFZRI+V7+yQLPV4x8QCzrH90TTqUmcbugru2ul8pVt8Sn93Fk5mAYWIHnfWJBQT88Sy4BPWtY2zcXuR28pKPp+rkoCXCAceDAGBDTVP1/oK3AF9j60xRTSXkwAAAABJRU5ErkJggg=="/>
			</span>
			<span @click="showEditModal(faculty)" style="cursor: pointer; margin-right: 10px;">
				<img class="icon icons8-Pencil" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABlUlEQVRoQ+3Yy1HDMBCA4VUq4EAIKQVyIZ2QCoAKaIEOgE64JGdK4EZmzIHcMyxSZsyYoOdK1q5m8DV25v8s+SUFjW+q8X74B3CPoKgROJ0vbnXQPQC+wR5WXbd5DZ0gMYDp+eW1UuqxD0aAT9jjMoQQATiOT0GwA1zxsQjxAAPxTSd2gAkMjYIPwQIwwSaq226e+qkShUB46bbr5fDOVB0wDEXEVQpC77/T+5+wAWxnOQXxBXD38b5+YAH4pkgMAhGe9fQ5TL3qgLj57Z5OrngDGf0aiIn/uedbrgmdeGU78/0xowJS4l0ItnchSjwFMcoI5MQfHlpHU8k3CsUBNeOLX8S144sCOOKLAbjiiwA447MB3PFZAAnxZICUeBJAUnwyQFp8EkBifDRAanwUQHJ8ECA93gtoId4JaCXeCpjOLm7UZPJr6SL0WTf8PeVjJOV/Xfv++aA5my/0UiRtqx1vHQEqgCO+GIArvgiAMz4bwB2fBZAQTwZIiScBJMUH34VoT4O6RxVfmaubX2F5fWxQ8yPwDdqMaECqlGOaAAAAAElFTkSuQmCC"/>
			</span>
			<span style="font-size: 16px; font-weight: 600;">{{ faculty.name }}</span>
			<div v-for="group in faculty.facultyGroups">
				<span @click="showRemoveGroupModal(group.id)" style="cursor: pointer; margin-right: 10px;">
					<img class="icon icons8-Удалить" width="23" height="23" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABQklEQVRoQ+1ZMW7CQBDcRYI2NCCo8BNcIngEPCH5AU/hB+EJySNipeQJUGGZBlqQWM6FJSIk3645y3I0bj13NzO7Nyf7mFr+cMv5EwQ0XUFU4F9VYDCavTPzZ5koEdkc0+QjlPBgLaQhX5AOKUItYDieSyjXNPNkhx8VNxUoXxACNLY/YFABo2GNwdV7oDGGnoXNAurezNreL3RBQOjWQgV8jmIPeBxCC6GFfA6ghf46gIPsxY55Go4U8jmKgwwphBSq9/cKUggp5HMAKYQUQgqV7gLEqC9E3EXGyd3CvPlwld6L7LM0iSxjK3zQzL6IeGFZRI+V7+yQLPV4x8QCzrH90TTqUmcbugru2ul8pVt8Sn93Fk5mAYWIHnfWJBQT88Sy4BPWtY2zcXuR28pKPp+rkoCXCAceDAGBDTVP1/oK3AF9j60xRTSXkwAAAABJRU5ErkJggg=="/>
				</span>
				<span @click="showEditGroupModal(group, faculty.id)" style="cursor: pointer; margin-right: 10px;">
					<img class="icon icons8-Pencil" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABlUlEQVRoQ+3Yy1HDMBCA4VUq4EAIKQVyIZ2QCoAKaIEOgE64JGdK4EZmzIHcMyxSZsyYoOdK1q5m8DV25v8s+SUFjW+q8X74B3CPoKgROJ0vbnXQPQC+wR5WXbd5DZ0gMYDp+eW1UuqxD0aAT9jjMoQQATiOT0GwA1zxsQjxAAPxTSd2gAkMjYIPwQIwwSaq226e+qkShUB46bbr5fDOVB0wDEXEVQpC77/T+5+wAWxnOQXxBXD38b5+YAH4pkgMAhGe9fQ5TL3qgLj57Z5OrngDGf0aiIn/uedbrgmdeGU78/0xowJS4l0ItnchSjwFMcoI5MQfHlpHU8k3CsUBNeOLX8S144sCOOKLAbjiiwA447MB3PFZAAnxZICUeBJAUnwyQFp8EkBifDRAanwUQHJ8ECA93gtoId4JaCXeCpjOLm7UZPJr6SL0WTf8PeVjJOV/Xfv++aA5my/0UiRtqx1vHQEqgCO+GIArvgiAMz4bwB2fBZAQTwZIiScBJMUH34VoT4O6RxVfmaubX2F5fWxQ8yPwDdqMaECqlGOaAAAAAElFTkSuQmCC"/>
				</span>
				<span style="font-size: 12px;">{{ group.name }}</span>
			</div>
		</div>


		<!--TODO DELETE FACULTY MODAL-->
		<div class="c-modal-wrapper" v-show="removeModal">
			<div class="c-modal-background"></div>
			<div class="c-modal">
				<div class="c-modal-header"></div>
				<div class="c-modal-body">
					<div>{{ msg.delete_faculty_msg }}</div>
				</div>
				<div class="c-modal-footer">
					<button class="mui-btn mui-btn--danger" @click="removeFaculty">{{ msg.delete }}</button>
					<button class="mui-btn mui-btn--primary" style="background: #4d759a;" @click="hideRemoveModal">{{ msg.cancel }}</button>
				</div>
			</div>
		</div>
		<!--TODO DELETE GROUP MODAL-->
		<div class="c-modal-wrapper" v-show="removeGroupModal">
			<div class="c-modal-background"></div>
			<div class="c-modal">
				<div class="c-modal-header"></div>
				<div class="c-modal-body">
					<div>{{ msg.delete_group_msg }}</div>
				</div>
				<div class="c-modal-footer">
					<button class="mui-btn mui-btn--danger" @click="removeGroup">{{ msg.delete }}</button>
					<button class="mui-btn mui-btn--primary" style="background: #4d759a;" @click="hideRemoveGroupModal">{{ msg.cancel }}</button>
				</div>
			</div>
		</div>


		<!--TODO UPDATE FACULTY MODAL-->
		<div class="admin-modal-wrapper" v-show="editModal">
			<div class="admin-modal-background" @click="hideEditModal"></div>
			<div class="admin-modal">
				<div class="c-close" @click="hideEditModal"></div>
				<div class="admin-modal-header"></div>
				<div class="admin-modal-body">
					<div>
						<label>{{ msg.faculty_name }}</label>
						<input type="text" v-model="faculty.name" class="uk-input"/>
					</div>
				</div>
				<div class="admin-modal-footer">
					<button class="mui-btn mui-btn--raised" @click="commitFaculty">{{ msg.edit }}</button>
					<button class="mui-btn mui-btn--raised" @click="hideEditModal">{{ msg.cancel }}</button>
				</div>

			</div>
		</div>
		<!--TODO UPDATE GROUP MODAL-->
		<div class="admin-modal-wrapper" v-show="editGroupModal">
			<div class="admin-modal-background" @click="hideEditGroupModal"></div>
			<div class="admin-modal">
				<div class="c-close" @click="hideEditGroupModal"></div>
				<div class="admin-modal-header"></div>
				<div class="admin-modal-body">
					<div>
						<label>{{ msg.group_name }}</label>
						<input type="text" v-model="group.name" class="uk-input"/>
					</div>
				</div>
				<div class="admin-modal-footer">
					<button class="mui-btn mui-btn--raised" @click="commitGroup">{{ msg.edit }}</button>
					<button class="mui-btn mui-btn--raised" @click="hideEditGroupModal">{{ msg.cancel }}</button>
				</div>

			</div>
		</div>


		<!--TODO CREATE FACULTY MODAL-->
		<div class="admin-modal-wrapper" v-show="facultyModal">
			<div class="admin-modal-background" @click="hideFacultyModal"></div>
			<div class="admin-modal">
				<div class="c-close" @click="hideFacultyModal"></div>
				<div class="admin-modal-header"></div>
				<div class="admin-modal-body">
					<div>
						<label>{{ msg.faculty_name }}</label>
						<input type="text" v-model="faculty.name" class="uk-input"/>
					</div>
				</div>
				<div class="admin-modal-footer">
					<button class="mui-btn mui-btn--raised" @click="commitFaculty">{{ msg.add_faculty }}</button>
				</div>
			</div>
		</div>
		<!--TODO CREATE GROUP MODAL-->
		<div class="admin-modal-wrapper" v-show="groupModal">
			<div class="admin-modal-background" @click="hideGroupModal"></div>
			<div class="admin-modal">
				<div class="c-close" @click="hideGroupModal"></div>
				<div class="admin-modal-header"></div>
				<div class="admin-modal-body">
					<div>
						<label>{{ msg.faculty }}</label>
						<select v-model="group.facultyId" class="uk-select">
							<option v-for="faculty in faculties()" v-bind:value="faculty.id">{{ faculty.name }}</option>
						</select>
					</div>
					<div>
						<label>{{ msg.group_name }}</label>
						<input type="text" v-model="group.name" class="uk-input"/>
					</div>
				</div>
				<div class="admin-modal-footer">
					<button class="mui-btn mui-btn--raised" @click="commitGroup">{{ msg.add_group }}</button>
				</div>
			</div>
		</div>

		<!--TODO REG MODAL-->
		<div class="admin-modal-wrapper" v-show="regModal">
			<div class="admin-modal-background" @click="hideRegModal"></div>
			<div class="admin-modal">
				<div class="c-close" @click="hideRegModal"></div>
				<div class="admin-modal-header"></div>
				<div class="admin-modal-body">

					<span v-if="!unsupportedFormat" style="display: block; height: 400px; overflow-y: auto;">
						<span v-for="info in regInfo" style="display: block;">
						<span v-if="!info.status" style="display: block;">
							
							<span style="display: block; margin-top: 10px;">{{ msg.user_with_username }} {{ info.username }} {{ msg.not_registered }}</span>

							<span v-for="error in info.errors" style="display: block;">
								<span style="font-size: 12px; color: crimson; display: block;" v-if="error === 'username_exists'">
									 - {{ msg.exists_username }}
								</span>
                        		<span style="font-size: 12px; color: crimson; display: block;" v-if="error === 'username_incorrect'">
									 - {{ msg.incorrect_username }}
								</span>
								<span style="font-size: 12px; color: crimson; display: block;" v-if="error === 'password_incorrect'">
									 - {{ msg.incorrect_password }}
								</span>
							</span>

						</span>
						<span v-if="info.status" style="color: mediumseagreen; display: block;">
							{{ msg.user_with_username }} {{ info.username }} {{ msg.registered }}
						</span>
						</span>
					</span>

					<div v-if="unsupportedFormat" style="font-size: 24px; text-align: center; color: crimson;">
						{{ msg.unsupported_format }}
					</div>

				</div>
				<div class="admin-modal-footer"></div>
			</div>
		</div>
		
    </div>
</template>

<script src="./university.module.js"></script>

<style>

	.c-close {
		display: inline-block;
		width: 20px; height: 20px;
		position: absolute;  top: 5px;  right: 5px;
		cursor: pointer;
	}
	.c-close::before,
	.c-close::after {
		display: block;
		content: "";
		width: 5%;
		height: 80%;
		background-color: #585858;
		position: absolute;
		top: calc(50% - 40%);
		right: calc(50% - 5%);
		transform-origin: 50% 50%;
	}
	.c-close::before {
		transform: rotate(-45deg);
	}
	.c-close::after {
		transform: rotate(45deg);
	}

	.c-modal-background {
		z-index: 1;
		position: fixed; top: 0; left: 0; bottom: 0; right: 0;
		background: rgba(0, 0, 0, 0.2);
	}
	.c-modal {
		z-index: 2;
		position: fixed; top: 150px;  left: calc(50% - 275px);
		background: #87c1cc; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
		width: 550px; height: auto;
	}
	.c-modal-header {
		width: 100%; height: 30px;
		background: #87c1cc;
	}
	.c-modal-body {
		width: 500px;
		margin: 0 auto;
	}
	.c-modal-footer {
		padding-left: 20px;
		padding-bottom: 20px;
	}

</style>