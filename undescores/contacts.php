<?php
/*
Template Name: Contacts
*/
?>

<?php get_header(); ?>

<section class="content_main">
				<div class="content_wrap">
					<div class="content__column">
						<div class="container">
							<div class="content__column-background">
								<div class="content__column-background_items">
									<section class="contacts">
										<div class="contacts__wrap">
											<div class="contact__items">
												<div class="contact__items-text">
													<div class="contact__items-text_time">З 10:00 до 21:00 без вихідних</div>
													<div class="contact__items-text_parking">Паркінг: присутній</div>
													<div class="contact__items-text_mail">E-mail: <a href="mailto: lviv.dovzhenko@gmail.com">lviv.dovzhenko@gmail.com</a></div>
													<div class="contact__items-text_fb">Сторінка facebook: <a target="_blank" href="https://www.facebook.com/pg/lvivdovzhenkocentr">https://www.facebook.com/pg/lvivdovzhenkocentre</a></div>
													<div class="contact__items-text_transport">
														<div class="text_transport-title">Громадській транспорт:</div>
														<div class="text_transport-sub">Tram №8, 4. Trolley №24. Bus № 4A, 11, 14, 16, 19, 23, 26, 32, 40, 41, 42, 47A, 53.</div>
													</div>
												</div>
												<div class="contact__items-map">
													<div class="map-responsive">
														<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5563.441744145426!2d24.052080461579802!3d49.79499443096226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae900eb3fcaf7%3A0x3a13e1edfb5ff49c!2z0KbQtdC90YLRgCDQlNC-0LLQttC10L3QutCw!5e0!3m2!1suk!2sua!4v1583783271214!5m2!1suk!2sua" width="450" height="800" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
													</div>
												</div>
											</div>
											<div class="button_each">
												<button class="for_each each_for">Зворотній зв'язок</button>
											</div>
											<!-- Обратная связь -->
											<section class="form-data">
											  <div class="form_block">
												  <div class="block__form">
													  <form>
													  		<!-- Hidden Required Fields -->
																<input type="hidden" name="project_name" value="Form call back">
																<input type="hidden" name="admin_email" value="ozerov.webmaster496@gmail.com">
																<input type="hidden" name="form_subject" value="Повідомлення з форми зворотнього звязку">
															<!-- END Hidden Required Fields -->
														    <span class="flash">
														      <span class="span_anim"></span>
														    </span>
														    <div class="label-mail style_to">
														      <label for="mail">Адреса электронної пошти</label>
														    </div>
														    <div class="input-mail">
														      <input id="mail" class="style_of" required type="text" name='mail' placeholder='Адреса пошти'>
														    </div>
														    <div class="label-name style_to">
														      <label for="name">Введіть ваше ім'я</label>
														    </div>
														    <div class="input-name">
														      <input id="name" class="style_of" type="text" name="Ім'я"" placeholder="Ваше ім'я" >
														    </div>
														    <div class="label-textarea style_to">
														      <label for="text-form">Напишіть повідомлення</label>
														    </div>
														    <div class="textarea-for">
														      <textarea id="text-form" class='textarea_style' name="Текст повідомлення" placeholder='Текст для повідомлення'></textarea>
														    </div>
														    <div class="button-form">
														      <button type='submit' id="sendMail" class='button_send send_button'  value='Send'>Відправити</button>
														    </div>
													  </form>
												   </div>
											 </div>
											</section>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> <!-- Конец секции контента -->

<?php get_footer(); ?>