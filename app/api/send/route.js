import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { to, from, subject, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to,
      subject,
      html: `คุณ ${from} (${email}) ได้เข้ามาดู portfolio คุณและส่งข้อความ:<br/><br/>${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
